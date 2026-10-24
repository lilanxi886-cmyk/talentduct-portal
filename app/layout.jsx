export const metadata = {
  title: 'TalentDuct Recruitment Portal',
  description: 'Enterprise Candidate & Client Management Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
