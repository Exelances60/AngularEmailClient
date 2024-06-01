export interface Email {
  id: string;
  subject: string;
  from: string;
  to: string;
  text: string;
  html: string;
  date: string;
}

export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}
