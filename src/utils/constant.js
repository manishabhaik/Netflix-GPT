export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

  export const USER_IMG =
    "https://occ-0-3241-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTqCB8uh6vUUpjPnmHk3iGyky27lLiL16NEFLBfZ4Kdaf9n0lOJFHM72muckX62W7XgI7MGhWwu9ki-vHV_hUJ2odJOr1CN1A_JI.png?r=962";


  export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
    },
  };
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY;
