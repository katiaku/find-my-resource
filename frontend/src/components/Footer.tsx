import TextLink from "./TextLink"
import IconButton from "./IconButton"
import { BsFillChatDotsFill } from "react-icons/bs"
import { FiGithub } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-between gap-4 bg-blue-950 px-6 py-2">
      <IconButton
        icon={<FiGithub className="text-4xl" />}
        handleClick={() => {
          window.open(
            "https://github.com/chingu-voyages/V55-tier2-team-23/tree/main",
            "_blank",
            "noopener,noreferrer"
          )
        }}
      />

      <div className="grid grid-cols-2 gap-2 md:flex">
        <TextLink label="Mark" href="https://github.com/thenotoriousob" />
        <TextLink label="Denys" href="https://github.com/TheDrakl" />
        <TextLink label="Katia" href="https://github.com/katiaku" />
        <TextLink label="Gisele" href="https://github.com/Gisele-1" />
      </div>

      <IconButton
        icon={<BsFillChatDotsFill className="text-4xl" />}
        handleClick={() => {
          console.log("Open AI Chat")
        }}
      />
    </footer>
  )
}

export default Footer
