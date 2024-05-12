import "boxicons";

export default function Footer() {
  return (
    <>
      <section className="">
        <div className="social-media flex justify-evenly p-5 bg-color3">
          <ul className="flex justify-center">
            <li className="facebook">
              <a href="" className="m-3">
                <box-icon
                  name="facebook"
                  type="logo"
                  color="#ffffff"
                  size="md"
                ></box-icon>
              </a>
            </li>
            <li className="instagram">
              <a href="" className="m-3">
                <box-icon
                  name="instagram"
                  type="logo"
                  color="#ffffff"
                  size="md"
                ></box-icon>
              </a>
            </li>
            <li className="tiktok">
              <a href="" className="m-3">
                <box-icon
                  name="tiktok"
                  type="logo"
                  color="#ffffff"
                  size="md"
                ></box-icon>
              </a>
            </li>
            <li className="twitter">
              <a href="" className="m-3">
                <box-icon
                  name="twitter"
                  type="logo"
                  color="#ffffff"
                  size="md"
                ></box-icon>
              </a>
            </li>
            <li className="youtube">
              <a href="" className="m-3">
                <box-icon
                  name="youtube"
                  type="logo"
                  color="#ffffff"
                  size="md"
                ></box-icon>
              </a>
            </li>
          </ul>
        </div>
        <div className="about p-5  bg-color4">
          <ul className="desktop:flex justify-center handphone:grid grid-rows-4 grid-flow-col gap-4  ">
            <li className="m-1 hover:text-white">
              <a href="">Tentang Kami</a>
            </li>
            <li className="m-1 hover:text-white">
              <a href="">Blog</a>
            </li>
            <li className="m-1 hover:text-white">
              <a href="">Karir</a>
            </li>
            <li className="m-1 hover:text-white">
              <a href="">Kebijakan Privasi</a>
            </li>
            <li className="m-1 hover:text-white">
              <a href="">Kebijakan Cookie</a>
            </li>
            <li className="m-1 hover:text-white">
              <a href="">Panduan</a>
            </li>
            <li className="m-1 hover:text-white">
              <a href="">Hubungi Kami</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
