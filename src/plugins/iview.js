import Vue from 'vue'
import {
  locale,
  Button,
  Icon,
  Card,
  Menu,
  Submenu,
  MenuItem,
  Form,
  Input,
  FormItem,
  Message,
  Select,
  Option,
  Row,
  Col,
  Table,
  Modal,
  DatePicker,
  CheckboxGroup,
  Checkbox,
  Poptip,
  RadioGroup,
  Radio,
  Tag,
  Avatar,
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tabs,
  TabPane,
  Spin,
  Page,
  Drawer,
  AutoComplete
} from 'iview'
import lang from 'iview/dist/locale/zh-TW'
import 'iview/dist/styles/iview.css'

locale(lang)

Vue.component('ViewButton', Button)
Vue.component('ViewIcon', Icon)
Vue.component('ViewCard', Card)
Vue.component('ViewMenu', Menu)
Vue.component('ViewSubmenu', Submenu)
Vue.component('ViewMenuItem', MenuItem)
Vue.component('ViewForm', Form)
Vue.component('ViewFormItem', FormItem)
Vue.component('ViewInput', Input)
Vue.component('ViewSelect', Select)
Vue.component('ViewOption', Option)
Vue.component('ViewRow', Row)
Vue.component('ViewCol', Col)
Vue.component('ViewTable', Table)
Vue.component('ViewModal', Modal)
Vue.component('ViewDatePicker', DatePicker)
Vue.component('ViewCheckboxGroup', CheckboxGroup)
Vue.component('ViewCheckbox', Checkbox)
Vue.component('ViewPoptip', Poptip)
Vue.component('ViewRadioGroup', RadioGroup)
Vue.component('ViewRadio', Radio)
Vue.component('ViewTag', Tag)
Vue.component('ViewAvatar', Avatar)
Vue.component('ViewBadge', Badge)
Vue.component('ViewDropdown', Dropdown)
Vue.component('ViewDropdownMenu', DropdownMenu)
Vue.component('ViewDropdownItem', DropdownItem)
Vue.component('ViewTabs', Tabs)
Vue.component('ViewTabPane', TabPane)
Vue.component('ViewSpine', Spin)
Vue.component('ViewPage', Page)
Vue.component('ViewDrawer', Drawer)
Vue.component('ViewAutoComplete', AutoComplete)

// Message需綁到Vue實體上
Vue.prototype.$ViewMessage = Message
Vue.prototype.$ViewModal = Modal
Vue.prototype.$IVIEW = {}
