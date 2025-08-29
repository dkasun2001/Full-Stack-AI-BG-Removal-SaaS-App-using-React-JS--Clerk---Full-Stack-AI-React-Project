import { Webhook, webhook } from "svix";
// API Controller Funtion for Managing Clerk User with Database

//https://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify the webhook signature
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });
    const { data, type } = req.body; // Destructure data and type from req.body

    switch (type) {
      case "user.created": {
        // Handle user created event
        break;
      }
      case "user.updated": {
        // Handle user updated event
        break;
      }
      case "user.deleted": {
        // Handle user deleted event
        break; 
      }
      default:
        console.log("Unhandled event type:", type);
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
