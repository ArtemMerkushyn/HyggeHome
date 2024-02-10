import PropTypes from 'prop-types';

const Icons = ({ icon }) => {
  const icons = {

    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="60" viewBox="0 0 88 60" fill="none">
        <path d="M31.6443 0.513405C30.9154 0.215283 30.3456 0.11283 29.657 0.513405C28.3328 1.28374 28.5765 2.95318 29.657 4.10508C30.4118 4.90976 32.2558 5.47313 32.2558 5.47313L41.7339 18.8131V23.9438L42.6511 23.0887V18.129L33.3259 4.78903C33.3259 4.78903 33.1758 1.13976 31.6443 0.513405Z" fill="#252525"/>
        <path d="M56.5627 0.513405C57.2916 0.215283 57.8615 0.11283 58.55 0.513405C59.8742 1.28374 59.172 2.78216 58.0915 3.93405C57.3367 4.73873 55.9512 5.47313 55.9512 5.47313L46.4731 18.8131V23.9438L45.5559 23.0887V18.129L54.8811 4.78903C54.8811 4.78903 55.0312 1.13976 56.5627 0.513405Z" fill="#252525"/>
        <ellipse cx="38.2182" cy="1.71025" rx="1.52872" ry="1.71025" fill="#FCB654"/>
        <ellipse cx="38.2182" cy="1.71025" rx="1.52872" ry="1.71025" fill="#FCB654"/>
        <ellipse cx="3.72893" cy="3.40042" rx="3.72893" ry="3.40042" transform="matrix(-0.268312 0.963332 -0.94427 -0.329172 38.6143 20.709)" fill="#FCB654"/>
        <ellipse cx="3.72893" cy="3.40042" rx="3.72893" ry="3.40042" transform="matrix(-0.268312 0.963332 -0.94427 -0.329172 38.6143 20.709)" fill="#FCB654"/>
        <ellipse cx="41.2754" cy="9.23517" rx="0.611311" ry="0.683902" fill="#FCB654"/>
        <ellipse cx="41.2754" cy="9.23517" rx="0.611311" ry="0.683902" fill="#FCB654"/>
        <path d="M36.7874 18.6418C39.1673 19.7512 41.2207 24.1146 41.2207 24.1146L40.3035 30.4425L27.1565 34.5471L15.6911 41.7302C15.6911 41.7302 13.6309 41.9145 12.3279 41.7302C4.98256 40.6912 3.84052 32.4756 0.709591 24.9697C-0.360512 22.4043 -0.105026 21.3327 0.709591 19.3259C1.89166 16.4139 4.22565 16.0762 7.13022 15.3923C16.3113 13.2305 21.0416 14.3662 31.1311 16.5895C33.7701 17.171 33.1185 16.9315 36.7874 18.6418Z" fill="#6883A0"/>
        <path d="M51.2136 18.6418C48.8337 19.7512 46.7803 24.1146 46.7803 24.1146L47.6975 30.4425L60.8445 34.5471L72.3099 41.7302C72.3099 41.7302 74.3701 41.9145 75.6731 41.7302C83.0184 40.6912 84.1605 32.4756 87.2914 24.9697C88.3615 22.4043 88.106 21.3327 87.2914 19.3259C86.1093 16.4139 83.7753 16.0762 80.8708 15.3923C71.6897 13.2305 66.9594 14.3662 56.8698 16.5895C54.2309 17.171 54.8825 16.9315 51.2136 18.6418Z" fill="#6883A0"/>
        <ellipse cx="40.052" cy="6.15701" rx="0.917233" ry="1.02615" fill="#FCB654"/>
        <ellipse cx="40.052" cy="6.15701" rx="0.917233" ry="1.02615" fill="#FCB654"/>
        <ellipse cx="42.8034" cy="12.9979" rx="0.305389" ry="0.341652" fill="#FCB654"/>
        <ellipse cx="42.8034" cy="12.9979" rx="0.305389" ry="0.341652" fill="#FCB654"/>
        <ellipse cx="1.52872" cy="1.71025" rx="1.52872" ry="1.71025" transform="matrix(-1 0 0 1 51.9766 0)" fill="#FCB654"/>
        <ellipse cx="1.52872" cy="1.71025" rx="1.52872" ry="1.71025" transform="matrix(-1 0 0 1 51.9766 0)" fill="#FCB654"/>
        <ellipse cx="0.611311" cy="0.683902" rx="0.611311" ry="0.683902" transform="matrix(-1 0 0 1 48.002 8.55127)" fill="#FCB654"/>
        <ellipse cx="0.611311" cy="0.683902" rx="0.611311" ry="0.683902" transform="matrix(-1 0 0 1 48.002 8.55127)" fill="#FCB654"/>
        <ellipse cx="0.917233" cy="1.02615" rx="0.917233" ry="1.02615" transform="matrix(-1 0 0 1 49.5303 5.13086)" fill="#FCB654"/>
        <ellipse cx="0.917233" cy="1.02615" rx="0.917233" ry="1.02615" transform="matrix(-1 0 0 1 49.5303 5.13086)" fill="#FCB654"/>
        <ellipse cx="0.305389" cy="0.341652" rx="0.305389" ry="0.341652" transform="matrix(-1 0 0 1 46.167 12.6562)" fill="#FCB654"/>
        <ellipse cx="0.305389" cy="0.341652" rx="0.305389" ry="0.341652" transform="matrix(-1 0 0 1 46.167 12.6562)" fill="#FCB654"/>
        <path d="M40.8086 50.6236V30.1006C40.8086 30.1006 23.5038 33.5906 15.4318 41.3882C14.3769 42.4073 13.3856 42.6932 12.833 44.1246C12.1166 45.9804 12.8433 47.3492 13.4445 49.2554C15.0457 54.3321 18.9048 55.272 23.2283 57.6356C25.1808 58.703 26.272 59.5363 28.426 59.8589C29.6686 60.0451 30.3942 60.0497 31.6363 59.8589C32.928 59.6606 33.6636 59.4461 34.8466 58.8328C38.1966 57.0959 40.8086 50.6236 40.8086 50.6236Z" fill="#FCB654"/>
        <path d="M47.3896 50.6236V30.1006C47.3896 30.1006 64.6944 33.5906 72.7664 41.3882C73.8213 42.4073 74.8126 42.6932 75.3652 44.1246C76.0817 45.9804 75.355 47.3492 74.7538 49.2554C73.1526 54.3321 69.2934 55.272 64.9699 57.6356C63.0175 58.703 61.9262 59.5363 59.7723 59.8589C58.5297 60.0451 57.804 60.0497 56.562 59.8589C55.2702 59.6606 54.5347 59.4461 53.3517 58.8328C50.0017 57.0959 47.3896 50.6236 47.3896 50.6236Z" fill="#FCB654"/>
        <path d="M40.6637 51.9917C40.6637 51.9917 42.2684 56.6094 44.1798 56.6094C46.6257 56.6094 48.1544 52.3332 48.1544 52.3332L48.0016 26.1686C48.0016 26.1686 46.6257 22.7465 44.1798 22.7461C41.2752 22.7456 40.2051 26.1664 40.2051 26.1664V36.9409L40.6637 51.9917Z" fill="#252525"/>
      </svg>
    ),

    search: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.7747 15.8961C12.6856 16.5948 11.3901 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.3901 16.5948 12.6856 15.8961 13.7747L20.5607 18.4393C21.1464 19.0251 21.1464 19.9749 20.5607 20.5607C19.9749 21.1464 19.0251 21.1464 18.4393 20.5607L13.7747 15.8961ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z"/>
      </svg>   
    ),
    basket: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H4C5.32783 2 6.45418 2.86266 6.84916 4.05811L18.9755 4.92427C20.1511 5.00825 20.9996 6.08543 20.8058 7.24799L20.2649 10.4932C20.0238 11.9398 18.7723 13 17.3057 13H7V14C7 14.5523 7.44772 15 8 15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H8C6.34315 17 5 15.6569 5 14V5C5 4.44772 4.55228 4 4 4H3C2.44772 4 2 3.55228 2 3ZM7 11H17.3057C17.7946 11 18.2118 10.6466 18.2921 10.1644L18.833 6.91919L7 6.07398V11Z"/>
        <path d="M6 22C7.10457 22 8 21.1046 8 20C8 18.8954 7.10457 18 6 18C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22Z"/>
        <path d="M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z"/>
      </svg>
    ),
    user: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.1736 16.1545C12.7319 15.9485 11.2682 15.9485 9.82638 16.1545L8.81907 16.2984C7.20151 16.5295 6 18.081 6 19.715C6 19.8724 6.12761 20 6.28502 20H17.715C17.8724 20 18 19.8724 18 19.715C18 18.081 16.7985 16.5295 15.181 16.2984L14.1736 16.1545ZM9.54354 14.1746C11.1729 13.9418 12.8271 13.9418 14.4565 14.1746L15.4638 14.3185C18.0667 14.6903 20 17.0857 20 19.715C20 20.977 18.977 22 17.715 22H6.28502C5.02304 22 4 20.977 4 19.715C4 17.0857 5.93337 14.6903 8.53623 14.3185L9.54354 14.1746Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3432 4 9.00001 5.34315 9.00001 7C9.00001 8.65685 10.3432 10 12 10ZM12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23859 2 7.00001 4.23858 7.00001 7C7.00001 9.76142 9.23859 12 12 12Z"/>
      </svg>
    ),
    right_arrow:(
      <svg fill="#FCB654" height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 330 330" >
        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
          C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
          C255,161.018,253.42,157.202,250.606,154.389z"/>
      </svg>
    ),
    cross:(
      <svg width="24px" height= "24px" vertical-align="middle" fill="#000000" overflow="hidden"
       viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  />
      </svg>
    ),
    check:(
      <svg width="24px" height="24px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M17.0303 8.78039L8.99993 16.8107L5.4696 13.2804L6.53026 12.2197L8.99993 14.6894L15.9696 7.71973L17.0303 8.78039Z" fill="#ffffff"></path> </g></svg>
    ),
    star: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.2746 2.18619C11.7263 1.93794 12.2737 1.93794 12.7254 2.18619C13.1505 2.41983 13.3323 2.85065 13.4071 3.02902C13.5031 3.25814 13.6011 3.55924 13.7065 3.88351L15.0994 8.16573L19.6053 8.16573C19.9469 8.1657 20.264 8.16567 20.5119 8.18616C20.7046 8.20209 21.1712 8.24166 21.5251 8.57408C21.9009 8.92716 22.07 9.44801 21.9732 9.95454C21.882 10.4314 21.5277 10.7375 21.381 10.8636C21.1924 11.0258 20.9358 11.212 20.6593 11.4127L17.0157 14.0569L18.4078 18.3365C18.5134 18.661 18.6114 18.9622 18.6685 19.2041C18.713 19.3923 18.8195 19.8479 18.6131 20.287C18.3938 20.7536 17.951 21.0756 17.4396 21.1404C16.9582 21.2015 16.5576 20.9597 16.3923 20.8594C16.1798 20.7305 15.9234 20.5444 15.6472 20.3439L12 17.697L8.35273 20.344C8.07659 20.5444 7.82023 20.7305 7.60773 20.8594C7.44238 20.9597 7.04182 21.2015 6.56042 21.1404C6.04897 21.0756 5.60624 20.7536 5.38691 20.287C5.18047 19.8479 5.287 19.3923 5.33147 19.2041C5.38861 18.9622 5.48663 18.661 5.59221 18.3365L6.98428 14.0569L3.34068 11.4126C3.06418 11.212 2.80755 11.0258 2.61896 10.8636C2.47233 10.7375 2.11796 10.4314 2.02681 9.95454C1.92999 9.44801 2.09907 8.92716 2.47494 8.57408C2.82883 8.24166 3.29539 8.20209 3.48814 8.18616C3.73603 8.16567 4.0531 8.1657 4.39473 8.16573L8.90057 8.16573L10.2935 3.88352C10.3989 3.55924 10.4969 3.25814 10.5929 3.02902C10.6677 2.85065 10.8495 2.41983 11.2746 2.18619ZM12 5.12899L10.765 8.92558C10.7614 8.93671 10.7573 8.94975 10.7527 8.96446C10.7089 9.10453 10.6179 9.3954 10.4254 9.62801C10.2637 9.82338 10.0553 9.97476 9.81946 10.0681C9.5387 10.1792 9.23394 10.1758 9.08718 10.1741C9.07178 10.174 9.05812 10.1738 9.04641 10.1738H5.05253L8.28192 12.5175C8.29141 12.5244 8.30257 12.5323 8.31515 12.5412C8.43503 12.6262 8.68397 12.8026 8.84598 13.0577C8.98206 13.272 9.06177 13.5172 9.07769 13.7706C9.09665 14.0722 8.999 14.3613 8.95197 14.5005C8.94704 14.5151 8.94266 14.528 8.93904 14.5392L7.70504 18.3328L10.9385 15.9862C10.948 15.9793 10.9589 15.9712 10.9713 15.962C11.089 15.8745 11.3335 15.6929 11.6258 15.6179C11.8713 15.5549 12.1287 15.5549 12.3742 15.6179C12.6665 15.6929 12.911 15.8745 13.0287 15.962C13.0411 15.9712 13.052 15.9793 13.0615 15.9862L16.295 18.3328L15.061 14.5392C15.0573 14.528 15.053 14.5151 15.048 14.5005C15.001 14.3613 14.9034 14.0722 14.9223 13.7706C14.9382 13.5172 15.0179 13.272 15.154 13.0577C15.316 12.8026 15.565 12.6262 15.6848 12.5412C15.6974 12.5323 15.7086 12.5244 15.7181 12.5175L18.9475 10.1738H14.9536C14.9419 10.1738 14.9282 10.174 14.9128 10.1741C14.7661 10.1758 14.4613 10.1792 14.1805 10.0681C13.9447 9.97476 13.7363 9.82339 13.5746 9.62801C13.3821 9.3954 13.2911 9.10452 13.2473 8.96445C13.2427 8.94975 13.2386 8.93671 13.235 8.92558L12 5.12899Z"/>
        <path d="M15.5 14.5L16.5 19.5L12 16.5L6.5 19.5L7.5 13L4 9H9.5L12 3.5L14 9H16.5L20 10.5L15.5 14.5Z"/>
      </svg>
    )
  };

  return icons[icon];
};

Icons.propTypes = {
  icon: PropTypes.string,
};

export default Icons;
