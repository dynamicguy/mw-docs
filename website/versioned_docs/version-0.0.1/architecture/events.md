---
id: version-0.0.1-events
title: Events
original_id: events
---

> **Note**
>
> Events are autogenerated and will be triggered when certain actions are completed, such us creating the order, cancelling fulfillment or completing a payment.


## Events Design

Each package representing an entity (order, account, etc.) that generate events define both a model and a `events.py` file containing a set of functions having `_event` for suffix.

Those functions are taking care of any logic and required fields for creating given events.


## Creating Events

To send an event, simply do the following:

```python
from saleor.order import events

# returns an OrderEvent
events.note_added_event(order=order, user=user, message="hello world!")
```

If now you want to send a ‘sent email’ event you would do the following:

```python
from saleor.order import events

events.email_sent_event(
    order=order,
    user=user,
    email_type=events.OrderEventsEmails.TRACKING_UPDATED,
)
```

Notice how we are providing the email type.

> **Note**
>
> The methods are using a `model_action_event` naming pattern.


## Order Events

| Code | GraphQL API value | Description | Additional Parameters (GraphQL) |
| --- | --- | --- | --- |
| `draft_created` | `DRAFT_CREATED` | A draft order was created by the staff user. | None. |
| `draft_added_products` | `DRAFT_ADDED_PRODUCTS` | The staff user added products to a draft order. | `lines` a list of objects containing a `quantity` (int), a `line_pk` (int) and a `item_name` (string) |
| draft_removed_products | DRAFT_REMOVED_PRODUCTS | The staff user removed products from a draft order. | `lines` a list of objects containing a `quantity` (int), a `line_pk` (int) and a `item_name` (string) |
| `placed` | `PLACED` | An order was placed by the customer. | None. |
| `draft_placed` | `PLACED_FROM_DRAFT` | An order was created from draft by the staff user. | None. |
| `oversold_items` | `OVERSOLD_ITEMS` | An order was created from draft, but some line items were oversold. | `oversold_items` a list of items (strings) |
| `canceled` | `CANCELED` | The order was cancelled. | None. |
| `order_paid` | `ORDER_PAID` | The order was fully paid by the customer. | `amount` (float), `payment_id` (string), `payment_gateway` (string) |
| `marked_as_paid` | `MARKED_AS_PAID` | The order was manually marked as fully paid by the staff user. | None. |
| `email_sent` | `EMAIL_SENT` | An email was sent to the customer. | `email` (string), `email_type` (`OrderEventsEmailsEnum`) |
| `captured` | `CAPTURED` | The payment was captured. | `amount` (float), `payment_id` (string), `payment_gateway` (string) |
| `refunded` | `REFUNDED` | The payment was refunded. | `amount` (float), `payment_id` (string), `payment_gateway` (string) |
| `voided` | `VOIDED` | The payment was voided. | `amount` (float), `payment_id` (string), `payment_gateway` (string) |
| `payment_failed` | `PAYMENT_FAILED` | The payment failed. | `message` (string), `payment_id` (string, optional), `payment_gateway` (string, optional) |
| `fulfillment_canceled` | `FULFILLMENT_CANCELED` | Fulfillment for one or more of the items was canceled. | `composed_id` (int) |
| `restocked_items` | `RESTOCKED_ITEMS` | One or more of the order’s items have been resocked | `quantity` (int) |
| `fulfilled_items` | `FULFILLED_ITEMS` | One or more of the order’s items have been fulfilled. | `fulfilled_items` a list of `line_pk` (int) |
| `note_added` | `NOTE_ADDED` | A note was added to the order by the staff. | `message` (string) |
| `other` | `OTHER` | Status used during reimporting of the legacy events. | None. |


## Email Event Types

| Code | GraphQL API value | Description |
| --- | --- | --- |
| `payment_confirmation` | `PAYMENT` | The order has been fully paid. |
| `shipping_confirmation` | `SHIPPING`| The order has been shipped. |
| `tracking_updated` | `TRACKING_UPDATED` | The shipping tracking number has been updated. |
| `order_confirmation` | `ORDER` | The order has been placed. |
| `fulfillment_confirmation` | `FULFILLMENT` | One or more of the order’s items have been fulfilled (both physical or digital) |
| `digital_links` | `DIGITAL_LINKS` | The links to the order’s digital goods have been sent. |


## Customer Related Events

| Code | GraphQL API value | Description | Additional Parameters (GraphQL) |
| --- | --- | --- | --- |
| `account_created` | `ACCOUNT_CREATED` | The customer’s account was created. | None. |
| `password_reset_link_sent` | `PASSWORD_RESET_LINK_SENT` | The password reset email was sent. | None. |
| `password_reset` | `PASSWORD_RESET` | The customer reset (changed) their password. | None. |
| `placed_order` | `PLACED_ORDER` | The customer placed an order. | None. |
| `note_added_to_order` | `NOTE_ADDED_TO_ORDER` | The customer added a note to one of their orders. | `message` (string) the message that the customer put as a note. |
| `digital_link_downloaded` | `DIGITAL_LINK_DOWNLOADED` | The customer or another user (anonymous) downloaded an ordered digital good. | `order_line` (`OrderLine`) the fulfilled digital order line that the user downloaded. |
| `customer_deleted` | `CUSTOMER_DELETED` | The staff user deleted one or many customers (anonymous). | `count` (int) the amount of customers deleted by the user. |
| `email_assigned` | `EMAIL_ASSIGNED` | The staff user assigned a new email address to a customer. | `message` (string) the assigned email address. |
| `name_assigned` | `NAME_ASSIGNED` | The staff user assigned a new full name to a customer. | `message` (string) the assigned full name. |
| `note_added` | `NOTE_ADDED` | The staff user added a note to a customer. | `message` (string) the note added to the customer. |