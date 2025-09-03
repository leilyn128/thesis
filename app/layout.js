import "./globals.css";

export const metadata = {
  title: "BTMS",
  description: "Barangay Treasurer Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
