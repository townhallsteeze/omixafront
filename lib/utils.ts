export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const meetingUrl = process.env.NEXT_PUBLIC_MEETING_URL || "https://teams.microsoft.com/l/meetup-join/replace-with-your-link";
