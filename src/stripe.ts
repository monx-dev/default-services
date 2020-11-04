import Stripe from 'stripe';

let stripeInstance: Stripe | null = null;

export const stripe = (): Stripe => {
  if (!stripeInstance) {
    stripeInstance = new Stripe(process.env.STRIPE_KEY as string, {
      apiVersion: '2020-08-27',
    });
  }

  return stripeInstance;
};
