import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all"; 

gsap.registerPlugin(ScrollTrigger);

function Heading({ title }) {
  return (
    <div className="section-heading select-none">
      <div className="heading flex translate-y-56 items-center justify-center space-x-[3%]">
        <h2 className="w-fit text-5xl sm:text-heading-2 font-medium uppercase text-secondary-600">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const heading = useRef(null);
  const body = useRef(null);
  const contactSection = useRef(null);

  useEffect(() => {
    if (!contactSection.current || !heading.current || !body.current) return;

    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),
      toggleActions: "play none none none",
    });

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="my-[10%] overflow-hidden" aria-label="contact me">
      <Heading title="" />
      <div ref={contactSection} className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12">
        <div className="col-span-4">
          <h3
            ref={heading}
            className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0"
          >
            {/* Optional content for the heading */}
          </h3>
          <form
            name="contact"
            action="mailto:heydevanshbehl@gmail.com"
            autoComplete="off"
            className="mt-10 font-grotesk"
            method="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your email
                </label>
              </div>
              <div className="relative z-0 sm:col-span-2">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
            >
              <span className="relative">
                <span className="group-hover:text-accent-400">Send Message</span>
              </span>
            </button>
          </form>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div>
            <h4 className="font-bold text-secondary-600">Contact Details</h4>
            <p>heydevanshbehl@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold text-secondary-600">Social Handles</h4>
            <div className="flex space-x-3">
              <a href="https://github.com" className="hover:text-accent-400">
                <Icon icon="akar-icons:github-fill" className="text-xl" />
              </a>
              <a href="https://linkedin.com" className="hover:text-accent-400">
                <Icon icon="akar-icons:linkedin-fill" className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
