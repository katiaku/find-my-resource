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
        <TextLink
          label="Mark"
          handleClick={() => {
            window.open(
              "https://github.com/thenotoriousob",
              "_blank",
              "noopener,noreferrer"
            )
          }}
        />
        <TextLink
          label="Denys"
          handleClick={() => {
            window.open(
              "https://github.com/TheDrakl",
              "_blank",
              "noopener,noreferrer"
            )
          }}
        />
        <TextLink
          label="Katia"
          handleClick={() => {
            window.open(
              "https://github.com/katiaku",
              "_blank",
              "noopener,noreferrer"
            )
          }}
        />
        <TextLink
          label="Gisele"
          handleClick={() => {
            window.open(
              "https://github.com/Gisele-1",
              "_blank",
              "noopener,noreferrer"
            )
          }}
        />
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
