export interface Email {
  id: string;
  subject: string;
  from: string;
  to: string;
  text: string;
  html: string;
}

export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}
