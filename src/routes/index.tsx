import { createSignal, Show, type VoidComponent } from "solid-js";
import PrimaryButton from "~/components/PrimaryButton";
import darkSVG from "/dark.svg";
import lightSVG from "/light.svg";

const Home: VoidComponent = () => {
  const [theme, setTheme] = createSignal("light");

  return (
    <main class={theme()}>
      <div class="grid h-screen place-items-center dark:bg-black">
        <div class="text-center dark:text-white">
          <button
            id="colorModeToggle"
            class="absolute top-10 right-10"
            onClick={() => {
              theme() === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            <Show
              when={theme() === "light"}
              fallback={<img src={darkSVG} class="h-8 w-8" alt="dark mode" />}
            >
              <img src={lightSVG} class="h-8 w-8" alt="light mode" />
            </Show>
          </button>
          <h2 class="font-bold text-4xl my-5">
            Eric Minassian - Software Engineer Intern @ Walmart
          </h2>

          <p class="text-lg my-5">
            Undergraduate student at the UCI studying Computer Science and
            Business Administration - Finance.
          </p>
          <p class="my-5 text-lg">
            Seeking Fall 2023 & Winter 2024 Software Engineer internships in the
            US.
          </p>
          <div class="grid grid-cols-4 content-center my-5">
            <PrimaryButton href="mailto:eric@ericminassian.com">
              Email
            </PrimaryButton>

            <PrimaryButton href="https://www.linkedin.com/in/minassian-eric/">
              LinkedIn
            </PrimaryButton>

            <PrimaryButton href="https://www.github.com/eric-minassian">
              Github
            </PrimaryButton>

            <PrimaryButton href="/resume.pdf">Resume</PrimaryButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
