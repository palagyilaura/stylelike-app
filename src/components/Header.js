import React from "react";
import "../css/Header.css";
import { HiOutlineChevronDown } from "react-icons/hi";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo">StyleLike</div>

        <ul className="menu-items">
          <li>
            <a>Campaigns</a>
          </li>
          <li>
            <a>Influencers</a>
          </li>
          <li>
            <a>Statistics</a>
          </li>
        </ul>
        <div className="profile">
          <div className="letters">
            <svg
              width="29"
              height="21"
              viewBox="0 0 29 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.0749 0.0160141H1.92511C0.864979 0.0160141 0 0.891295 0 1.96405V17.036C0 18.1087 0.864979 18.984 1.92511 18.984H23.0749C24.135 18.984 25 18.1087 25 17.036V1.96405C25 0.891295 24.135 0.0160141 23.0749 0.0160141V0.0160141ZM22.7954 1.45703L12.6319 10.2525L2.46835 1.45703H22.7954V1.45703ZM23.576 17.036C23.576 17.3135 23.3492 17.543 23.0749 17.543H1.92511C1.65084 17.543 1.42405 17.3135 1.42405 17.036V2.44972L12.1677 11.7469C12.173 11.7522 12.1835 11.7576 12.1888 11.7629C12.1941 11.7683 12.2046 11.7736 12.2099 11.7789C12.2257 11.7896 12.2363 11.8003 12.2521 11.8056C12.2574 11.811 12.2627 11.811 12.2679 11.8163C12.289 11.827 12.3101 11.8376 12.3312 11.8483C12.3365 11.8483 12.3418 11.8537 12.347 11.8537C12.3629 11.859 12.3787 11.8697 12.3998 11.875C12.4051 11.875 12.4156 11.8803 12.4209 11.8803C12.4367 11.8857 12.4525 11.891 12.4684 11.891C12.4736 11.891 12.4842 11.8964 12.4895 11.8964C12.5053 11.9017 12.5264 11.9017 12.5422 11.907C12.5475 11.907 12.5527 11.907 12.558 11.907C12.5791 11.907 12.6055 11.9124 12.6266 11.9124V11.9124V11.9124C12.6477 11.9124 12.6741 11.9124 12.6951 11.907C12.7004 11.907 12.7057 11.907 12.711 11.907C12.7268 11.907 12.7479 11.9017 12.7637 11.8964C12.769 11.8964 12.7795 11.891 12.7848 11.891C12.8006 11.8857 12.8165 11.8803 12.8323 11.8803C12.8376 11.8803 12.8481 11.875 12.8534 11.875C12.8692 11.8697 12.885 11.8643 12.9061 11.8537C12.9114 11.8537 12.9167 11.8483 12.9219 11.8483C12.943 11.8376 12.9641 11.827 12.9852 11.8163C12.9905 11.811 12.9958 11.811 13.0011 11.8056C13.0169 11.7949 13.0274 11.7896 13.0432 11.7789C13.0485 11.7736 13.0591 11.7683 13.0643 11.7629C13.0696 11.7576 13.0802 11.7522 13.0854 11.7469L23.576 2.67922V17.036V17.036Z"
                fill="#BDBDBD"
              />
              <circle
                cx="23.5"
                cy="15.5"
                r="4.5"
                fill="white"
                stroke="#979797"
              />
              <path
                d="M24.7028 17.31C24.7828 17.31 24.8458 17.333 24.8918 17.379C24.9398 17.423 24.9638 17.482 24.9638 17.556V18H21.9878V17.754C21.9878 17.704 21.9978 17.652 22.0178 17.598C22.0398 17.542 22.0738 17.492 22.1198 17.448L23.4368 16.128C23.5468 16.016 23.6448 15.909 23.7308 15.807C23.8188 15.705 23.8918 15.604 23.9498 15.504C24.0078 15.404 24.0518 15.303 24.0818 15.201C24.1138 15.097 24.1298 14.988 24.1298 14.874C24.1298 14.77 24.1148 14.679 24.0848 14.601C24.0548 14.521 24.0118 14.454 23.9558 14.4C23.9018 14.346 23.8358 14.306 23.7578 14.28C23.6818 14.252 23.5958 14.238 23.4998 14.238C23.4118 14.238 23.3298 14.251 23.2538 14.277C23.1798 14.301 23.1138 14.336 23.0558 14.382C22.9978 14.426 22.9488 14.478 22.9088 14.538C22.8688 14.598 22.8388 14.664 22.8188 14.736C22.7848 14.828 22.7408 14.889 22.6868 14.919C22.6328 14.949 22.5548 14.956 22.4528 14.94L22.0628 14.871C22.0928 14.663 22.1508 14.481 22.2368 14.325C22.3228 14.167 22.4298 14.036 22.5578 13.932C22.6878 13.826 22.8358 13.747 23.0018 13.695C23.1698 13.641 23.3498 13.614 23.5418 13.614C23.7418 13.614 23.9248 13.644 24.0908 13.704C24.2568 13.762 24.3988 13.845 24.5168 13.953C24.6348 14.061 24.7268 14.191 24.7928 14.343C24.8588 14.495 24.8918 14.664 24.8918 14.85C24.8918 15.01 24.8678 15.158 24.8198 15.294C24.7738 15.43 24.7108 15.56 24.6308 15.684C24.5528 15.808 24.4608 15.928 24.3548 16.044C24.2488 16.16 24.1378 16.278 24.0218 16.398L23.0438 17.397C23.1378 17.369 23.2308 17.348 23.3228 17.334C23.4168 17.318 23.5058 17.31 23.5898 17.31H24.7028Z"
                fill="#F60051"
              />
            </svg>
          </div>
          <div className="my-profile">
            <a className="profile-pic">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <circle
                  cx="13"
                  cy="13"
                  r="12"
                  fill="url(#pattern0)"
                  stroke="#E1E1E1"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0"
                      transform="translate(-0.449367) scale(0.0126582)"
                    />
                  </pattern>
                  <image
                    id="image0"
                    width="150"
                    height="79"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABPCAIAAACGUqtSAAAAAXNSR0IArs4c6QAAAnBJREFUeAHt2L2OAVEYxnFZ23ENKo1L0EgkSo2KWimuQCFR6LkBtY4L0IheRTQqkah0FLIS+9iTnYyRyEmcszHrP8VmPs68M37Png8SCTYEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIG3EEilUv4+ZyaT8VfceeWk84p/UFDEjUZjOp26fVapVKrVasVicbvd7nY7t8WpdiOwXq9ddZRcLlev18fj8Xw+199KpXLzJA58CAh6uVw+U1mDsKLq9XqK7XA47Pd77SvLZ2pyr61As9m8XC6DwcD2hlC7QqHQarUmk8lms1ERbfpX0JlQE3b9C6jHnM9ndRrLR2WzWY2Tw+FQY686nEnudDrNZrNqtWpZhGbOBJSE8jMBPC6qeMw4aSI3dyk/HaqIuuPj27nqS0DdyGyKpNvtRh6Tz+fb7bbGSeWkmE1saq99hafBU6G6WgRFHs2hlYDiUSq/IV6D0dioLqV50UxvuhTEZpqZ8LRm0Qxq9QwaeRXQQlSRBBEGIUViC86r52nCK5fLXt/qFYp/vsJL2LxDOp2+b/b1s4XP6wvD8XgcjUadTme1WoUv/df9j7h8sMVikUw++i1J4amb9vt9ha0fWd4kv7jEd31PJWTWKfdjqcZMzYtMeDGIU1/ytDZRYJr/zKZ1ppYzfEmIQXiRV9Tv0cQWMeEQAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAgVgJfAMC02JAxF+sBQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </a>

            <a>My Profile</a>
            <div>
              <a className="dropdown">
                <HiOutlineChevronDown className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
