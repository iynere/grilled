# GRILLED
:fire::fire::fire::fire::fire::fire:
### Luxury BBQ Marketplace

## Rails :fire: Back End

### Tables

- #### users
  - required
    - username, string, unique index
    - email, string, unique index
    - password_digest, string
    - session_token, string, unique index
- #### conversations
  - required
    - sender_id, integer, index
    - recipient_id, integer, index
    - listing_id, integer, unique index with sender_id
  - optional
    - offer, integer
- #### messages
  - required
    - user_id, integer, index
    - content, string
- #### listings
  - required
    - user_id, integer, index
    - name, string, index
    - brand, string, index
    - description, string, index
    - price, integer
    - sold, boolean, default: false

### Models

- #### User
  - has_many :sent_conversations
  - has_many :received_conversations
  - has_many :messages
- #### Conversation
  - belongs_to :sender
  - belongs_to :recipient
  - belongs_to :listing
  - has_many :messages
- #### Message
  - belongs_to :conversation
  - belongs_to :user
- #### Listing
  - belongs_to :user
  - has_many :conversations

### Controllers

- #### StaticPagesController
  - just renders view for root div that anchors React app
- #### Api::UsersContoller
  - actions
    - create: signs a user up and and logs them in.
  - authentication layer stuff.
  - method to return all conversations for a user.
- #### Api::SessionsController
  - actions
    - create: logs a user in
    - destroy: logs a user out
- #### Api::ConversationsController
  - actions
    - index: returns all conversations for currentUser.
    - show: returns all messages associated with a particular conversation.
    - update: only called when an offer or counter offer is made. Returns an error if listing is sold.
- #### Api::MessagesController
  - actions
    - create: creates a new message
- #### Api::ListingsController
  - actions
    - index: returns all listings titles, brands, and prices.
    - show: returns specific information for a particular listing.


## React/Redux :fire: Front End
  - ### actions
    - #### session
      - RECEIVE_CURRENT_USER
      - TOGGLE_AUTH_FORM_TYPE
      - signin
      - signup
      - logout
    - #### listings
      - RECEIVE_LISTINGS
      - RECEIVE_LISTING
      - fetchListings
      - fetchListing
    - #### conversations
      - RECEIVE_CONVERSATIONS
      - RECEIVE_CONVERSATION
      - fetchConversations
      - fetchConversation
      - createConversation
      - updateConversation
    - #### messages
      - RECEIVE_MESSAGE
      - createMessage
    - #### errors
      - RECEIVE_ERRORS
      - CLEAR_ERRORS
  - ### components
    - #### index
      - ##### AuthForm
      - ##### Listings
    - #### header
    - #### messaging
      - ##### mailBox
      - ##### messageForm
      - ##### message
      - ##### conversationForm
      - ##### conversationDetail


## :fire:S:fire:A:fire:S:fire:S:fire:

- #### application.sass
  Only used to import other sass files. I prefer this to importing tree because it gives me explicit control over load order.
- #### reset.sass
  Simple reset file that removes troublesome user-agent default styles. Depending on the project I might start with someone else's and go from there, but here I made my own.
- #### vars.sass
  Does what it says on the tin. I like to keep all SASS variables for colors and fonts here, along with any animations or mixins I might write.
- #### base.sass
  Base styles for HTML components, E.G.: Body, Button, or any element I want to style site-wide.
- #### layout.sass
  Responsive layout classes.
- #### molecules.sass
  Larger style classes for objects that are repeated throughout site or simply make sense to package together, such as styles for the logo or different types of buttons.
- #### atoms.sass
  This may seem a little weird, but I think things like typography and spacing, as well as other commonly used rules, should be separated out into single ( or occasionally double) line rules. It lets you write less rules overall.
