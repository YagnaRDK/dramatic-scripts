export default function Header() {
  return (
    <div className="flex text-white">
      {/* <div className="items-center grid-flow-col">
        <p>Dramatic Scripts © 2023 - All right reserved</p>
      </div> */}
      <div className="flex fixed shadow_guju_svg flex-row mr-auto ml-5 gap-3">
        <a href="/scripts" className="m-10 max-w-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="fill-white w-16 h-16"
          >
            <path
              d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
              data-name="4-Arrow Left"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
