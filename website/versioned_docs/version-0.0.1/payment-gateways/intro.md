---
id: version-0.0.1-intro
title: Supported Payment Gateways
sidebar_label: Introduction
original_id: intro
---

You will find below the list of payment gateways supported by DrikGallery and their configuration guide.

- [Braintree (supports PayPal and Credit Cards)](/mw-docs/docs/payment-gateways/braintree)
- [Razorpay (supports only the paisa currency)](/mw-docs/docs/payment-gateways/razorpay)
- [Stripe (supports Credit Cards)](/mw-docs/docs/payment-gateways/stripe)

The default configuration only uses the dummy backend (see [how to enable/disable payment gateways](/mw-docs/docs/getting-started/configuration#payments-gateways)). It’s meant to allow developers to easily simulate different payment results.

For an how-to guide on adding new payments into your DrikGallery project please check [Payments](/mw-docs/docs/guides/payments).

> **Note**
>
> All payment backends default to using sandbox mode. This is very useful for development but make sure you use production mode when deploying to a production server.