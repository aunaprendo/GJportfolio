export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a
            href="https://www.squirrel365.io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Link (opens in a new tab)"
          >
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://getsquirrel.co/products/widget"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Link (opens in a new tab)"
          >
            Widgets
          </a>
        </li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-label="Apps">
            <li>
              <a
                href="https://www.daniconnorwild.com/shop/p/calendar-2024-t6y9b-zwbfm-gmnjc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Link (opens in a new tab)"
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/yOfpURd9a6Y?si=JwhD8Y8HboxflGIt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Link (opens in a new tab)"
              >
                Chat
              </a>
            </li>
            <li>
              <a
                href="https://www.squirrelmail.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Link (opens in a new tab)"
              >
                Email
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
