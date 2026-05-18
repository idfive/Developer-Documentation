---
description: Steps for setting up a client Pantheon account and adding idfive LLC as a supporting organization.
---

# Pantheon Client Setup

This document covers two related workflows: helping a client create and configure their own Pantheon account, and adding idfive LLC as a supporting organization so our team can build, launch, or maintain their site(s).

---

## Client Pantheon Account Setup

The preferred workflow is for **idfive to create the site as a sandbox under the idfive Pantheon team**, build and develop there, then transfer ownership to the client when they are ready to launch on a paid plan. This avoids delays waiting on client account creation and billing setup before development can begin.

### Preferred workflow: idfive creates, then transfers

1. **idfive creates a sandbox** under the idfive Pantheon team at the start of the project.
2. **Development proceeds** on that sandbox in the normal way (see [Accelerator Initialization](/docs/accelerator/initialization)).
3. **When the client is ready to launch**, idfive provides an email address and the client uses it to accept a site ownership transfer from the Pantheon dashboard.
4. **The client creates a Pantheon account** (if they don't already have one) at [https://pantheon.io](https://pantheon.io) using a company or team email address, and enters billing information to accept the transfer and upgrade to a paid plan.
5. **The client chooses a plan** appropriate for their expected traffic. Common starting plans:
   - **Basic** — ~$50/mo, suitable for lower-traffic sites.
   - **Silver** — ~$55/mo, suitable for most standard sites.
   - Pantheon may automatically upgrade a site based on its own internal traffic metrics, so advise the client that their plan may change over time. See [Pantheon pricing](https://pantheon.io/plans/pricing) for details.
6. **idfive is added as a supporting organization** on the transferred site for ongoing access — see the section below.

### If needed, idfive can introduce the client to Pantheon

If the client needs guidance or has questions about plans and pricing, idfive can introduce them to our Pantheon account representative: **Sam Brazil** (sam.brazil@pantheon.io).

---

## Adding idfive LLC as a Supporting Organization

Adding idfive LLC as a supporting organization on a client's Pantheon site gives our team the access needed to build, launch, and/or maintain the site without requiring full account ownership.

### Steps (performed by the client or a site owner)

1. Log in to the [Pantheon dashboard](https://dashboard.pantheon.io).
2. Navigate to the site in question.
3. Go to the **Team** tab on the site dashboard.
4. Under **Supporting Organizations**, click **Add Supporting Organization**.
5. Search for **idfive llc** and select it.
6. Confirm the addition.

Once confirmed, idfive team members with access to the idfive LLC Pantheon organization will be able to see and work on the site.

### Confirming access

After the client adds idfive LLC, confirm internally that the site appears in the idfive Pantheon dashboard. If it does not appear, ask the client to verify the organization name used was exactly **idfive llc**.

---

## Notes

- The preferred workflow is for idfive to build under the **idfive Pantheon team** sandbox first, then transfer ownership to the client when a paid plan is in place at launch.
- DNS issues (A/AAAA records) are common during launch. Refer to [Pantheon's DNS documentation](https://docs.pantheon.io/guides/launch/configure-dns/) for the correct records to provide to the client's DNS provider.
- For idfive-side Pantheon setup steps (creating sandboxes, cloning the accelerator, etc.), see the [Accelerator Initialization](/docs/accelerator/initialization) doc.
