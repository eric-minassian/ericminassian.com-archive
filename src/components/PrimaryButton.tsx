type PrimaryButtonProps = {
  href: string;
  children: string;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <a
      class="border-solid border-2 border-black dark:border-white rounded-full mx-2 hover:border-white dark:hover:border-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}
