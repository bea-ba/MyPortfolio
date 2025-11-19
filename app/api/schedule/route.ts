import { NextRequest, NextResponse } from 'next/server';
import { sendCoffeeChatEmail } from '@/lib/email';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';
import { isValidEmail } from '@/lib/utils';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, 3, 15 * 60 * 1000); // 3 requests per 15 minutes

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
          resetTime: rateLimit.resetTime,
        },
        { status: 429 }
      );
    }

    // Parse request body
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.name.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name is required' },
        { status: 400 }
      );
    }

    if (!data.email || !data.email.trim()) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!data.stuckOn || !data.stuckOn.trim()) {
      return NextResponse.json(
        { success: false, message: 'Please tell us what you want to discuss' },
        { status: 400 }
      );
    }

    if (!data.preferredDate) {
      return NextResponse.json(
        { success: false, message: 'Please select a preferred date' },
        { status: 400 }
      );
    }

    if (!data.preferredTime) {
      return NextResponse.json(
        { success: false, message: 'Please select a preferred time' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendCoffeeChatEmail({
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      stuckOn: data.stuckOn.trim(),
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      moreDetail: data.moreDetail?.trim(),
      desiredOutcome: data.desiredOutcome?.trim(),
      additionalContext: data.additionalContext?.trim(),
    });

    if (!result.success) {
      console.error('Email sending failed:', result.error);
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to submit form. Please try again or email directly.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Coffee chat request submitted. Check your email for confirmation.',
    });
  } catch (error) {
    console.error('Schedule form API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}
