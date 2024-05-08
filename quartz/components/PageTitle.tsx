import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div>
    <a href={baseDir}>
      <img src="https://raw.githubusercontent.com/Voice-Mate/VoiceMateBackend/production/staticfiles/images/appicon.png?token=GHSAT0AAAAAACHGGVVQSWC2KOXXCV65BL44ZR3HFBA" alt="Description of the image" width="70" height="70" />
    </a>
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h1>
    </div>
    
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
