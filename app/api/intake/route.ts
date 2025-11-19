import { NextRequest, NextResponse } from 'next/server';
import { sendIntakeFormEmail } from '@/lib/email';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';
import { isValidEmail } from '@/lib/utils';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, 5, 15 * 60 * 1000); // 5 requests per 15 minutes

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

    if (!data.problemDescription || !data.problemDescription.trim()) {
      return NextResponse.json(
        { success: false, message: 'Problem description is required' },
        { status: 400 }
      );
    }

    // Basic spam prevention (honeypot field)
    if (data.website && data.website.includes('http') && !data.realWebsite) {
      // If website field contains http but no realWebsite field, it's likely spam
      console.log('Potential spam detected:', data);
    }

    // Send email
    const result = await sendIntakeFormEmail({
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      problemDescription: data.problemDescription.trim(),
      timeline: data.timeline,
      budgetRange: data.budgetRange,
      website: data.realWebsite?.trim() || data.website?.trim(),
      howDidYouFind: data.howDidYouFind?.trim(),
      priorities: data.priorities || [],
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
      message: 'Form submitted successfully. Check your email for confirmation.',
    });
  } catch (error) {
    console.error('Intake form API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}
