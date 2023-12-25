export default function Header() {
  return (
    <div className="flex text-white">
      {/* <div className="items-center grid-flow-col">
        <p>Dramatic Scripts © 2023 - All right reserved</p>
      </div> */}
      <div className="flex fixed flex-row w-full place-content-start content-center gap-3">
        <a
          href="/scripts"
          className="m-5 sm:m-8 md:m-10 max-w-max shadow_guju_svg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="fill-white w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16"
          >
            <path
              d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
              data-name="4-Arrow Left"
            />
          </svg>
        </a>

        <div className="invisible md:visible w-full max-h-max relative">
          <div className="flex flex-col items-center absolute right-5 h-full w-fit place-content-center">
            <a
              className="btn btn-outline btn-primary rounded-2xl"
              href="https://docs.dramaticrp.in/"
              target="_blank"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
