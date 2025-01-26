function SidebarIcon({ isOpen, toggle }) {
  return (
    <>
      <div className="p-6 absolute z-50">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="45"
            viewBox="0 -960 960 960"
            width="45"
            className="cursor-pointer"
            onClick={toggle}
          >
            <path
              d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h440q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240H160Zm596-68L612-452q-12-12-12-28t12-28l144-144q11-11 28-11t28 11q11 11 11 28t-11 28L696-480l116 116q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM160-440q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h320q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h440q17 0 28.5 11.5T640-680q0 17-11.5 28.5T600-640H160Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="35"
            height="35"
            viewBox="0 0 65 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={toggle}
          >
            <path
              d="M59.8684 42.8235C61.1863 42.8241 62.4534 43.278 63.4071 44.0911C64.3609 44.9043 64.9282 46.0143 64.9915 47.1913C65.0549 48.3682 64.6093 49.5218 63.7473 50.4131C62.8853 51.3043 61.6727 51.8649 60.361 51.9786L59.8684 52H5.13158C3.81373 51.9994 2.54665 51.5455 1.59289 50.7324C0.639126 49.9193 0.071801 48.8092 0.00846963 47.6323C-0.0548617 46.4553 0.390656 45.3017 1.25271 44.4104C2.11475 43.5192 3.32725 42.9586 4.63895 42.8449L5.13158 42.8235H59.8684ZM59.8684 21.4118C61.2294 21.4118 62.5346 21.8952 63.497 22.7556C64.4594 23.6161 65 24.7831 65 26C65 27.2169 64.4594 28.3839 63.497 29.2444C62.5346 30.1048 61.2294 30.5882 59.8684 30.5882H5.13158C3.7706 30.5882 2.46536 30.1048 1.503 29.2444C0.540647 28.3839 0 27.2169 0 26C0 24.7831 0.540647 23.6161 1.503 22.7556C2.46536 21.8952 3.7706 21.4118 5.13158 21.4118H59.8684ZM59.8684 0C61.2294 0 62.5346 0.483402 63.497 1.34386C64.4594 2.20432 65 3.37136 65 4.58824C65 5.80511 64.4594 6.97215 63.497 7.83261C62.5346 8.69307 61.2294 9.17647 59.8684 9.17647H5.13158C3.7706 9.17647 2.46536 8.69307 1.503 7.83261C0.540647 6.97215 0 5.80511 0 4.58824C0 3.37136 0.540647 2.20432 1.503 1.34386C2.46536 0.483402 3.7706 0 5.13158 0H59.8684Z"
              fill="url(#paint0_linear_614_454)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_614_454"
                x1="0"
                y1="0"
                x2="76.0541"
                y2="60.361"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6628EC" />
                <stop offset="0.426844" stopColor="#8B127C" />
                <stop offset="1" stopColor="#F24BA5" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </>
  );
}

export default SidebarIcon;
