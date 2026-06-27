export interface Lead {
  ch: string;
  name: string;
  msg: string;
  reply: string;
  secs: number;
  label?: string;
}

/** The 5 looping demo leads shown in the hero LeadCard. */
export const leads: Lead[] = [
  {
    ch: "WEB FORM",
    name: "SARAH M.",
    msg: "Hi! Do you have availability this week for a quote?",
    reply: "Hi Sarah 👋 Yes — I've got Thursday 2pm or Friday AM open. Want me to lock one in?",
    secs: 41,
  },
  {
    ch: "PHONE CALL · AI VOICE",
    name: "INBOUND CALL · (604) •••-2231",
    msg: "“Hey, my water heater just started leaking — can someone come out today?”",
    reply:
      "Thanks for calling! I can get a tech out to you between 2 and 4 today. Let me grab your address and text a confirmation — what's the best number?",
    secs: 11,
    label: "TYVELO · AI VOICE AGENT",
  },
  {
    ch: "INSTAGRAM DM",
    name: "DAVE R.",
    msg: "Saw your work — can you do a full kitchen reno?",
    reply: "Absolutely, Dave. I do kitchens regularly. What's your timeline and rough budget?",
    secs: 36,
  },
  {
    ch: "MISSED CALL",
    name: "+1 (604) •••-114",
    msg: "Called at 9:42pm — no answer.",
    reply: "Hey! Sorry we missed your call. We're on it — what do you need a hand with?",
    secs: 8,
  },
  {
    ch: "FACEBOOK",
    name: "LENA K.",
    msg: "What are your rates for monthly cleaning?",
    reply: "Hi Lena! Monthly plans start affordable — want a quick quote for your place?",
    secs: 52,
  },
];
