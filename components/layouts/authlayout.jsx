export default function LoginLayout({ children }) {
  return (
    <div
      className=" items-center justify-center overflow-hidden "
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(22,163,74,0.9), rgba(220,38,38,0.8), rgba(250,204,21,0.7)), url('/logo.jpg')",
        backgroundSize: "cover, 250px",   // gradient covers screen, logo fixed size
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Login card */}
      <div className="S">
        {children}
      </div>
    </div>
  )
}
