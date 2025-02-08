import { output } from "../utils/output";

export function handleSubmit(event = new Event(message)) {
  event.preventDefault();
  output(`Thank you ${event.target.name.value } for your information.`);
   if(event.target.email.value.length > 0) output("Discount code 2025");
}
