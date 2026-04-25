export default function Prompt(props: { currentDirectory: string }) {
  return (
    <span className="mr-2">
      <span className="text-[#21c080] font-bold">guest@Ohmura&apos;s-portfolio-site</span>
      <span>:</span>
      <span className="text-[#3b8eea] font-bold">{props.currentDirectory}</span>
      <span>$</span>
    </span>
  );
}
