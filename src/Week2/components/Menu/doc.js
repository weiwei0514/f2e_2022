import { VscHome, VscTrash, VscSettingsGear, VscArchive } from "react-icons/vsc"
import { AiOutlineFileText, AiOutlineQuestionCircle } from "react-icons/ai"

export const menuList = [
  { id: "Home", title: "首頁", icon: <VscHome /> },
  { id: "Files", title: "所有文件", icon: <AiOutlineFileText /> },
  { id: "Archive", title: "封存", icon: <VscArchive /> },
  { id: "Trash", title: "垃圾桶", icon: <VscTrash /> },
  { id: "Setting", title: "設定", icon: <VscSettingsGear /> },
  { id: "Support", title: "支援", icon: <AiOutlineQuestionCircle /> },
]
