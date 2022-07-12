<template>
  <div class="react-components">
    <h1>React table</h1>
    <Table :columns="columns" :dataSource="tableData" />
    <h1>AutoscrollRunner</h1>
    <AutoscrollRunner
      :definition={form} />
  </div>
</template>

<script>
import { Table, Divider, Tag } from 'antd';
import { AutoscrollRunner } from "tripetto-runner-autoscroll";
//import { form } from "../form";

const Form = {
    "name": "ExitSurveyFR",
    "language": "fr",
    "epilogue": {
        "title": "Merci !"
    },
    "clusters": [
        {
            "id": "a16b19ff6f4a9a0b809b5be1b751eaeec216a812b6b5cdf79dec64a65cae5885",
            "name": "Formulaire",
            "nodes": [
                {
                    "id": "6f061233ac63408e94f068adb7de7783c7bb7d998e2b975d7490e3d35cb857d3",
                    "name": "cusdate",
                    "slots": [
                        {
                            "id": "40b53f8260bad457c03b444e64382aeb81f7f23e2a710b3f517071c91554bfd3",
                            "type": "string",
                            "kind": "static",
                            "reference": "value",
                            "label": "Hidden field / Global JavaScript variable / cusdate"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-hidden-field",
                        "version": "5.0.3",
                        "fieldType": "variable",
                        "fieldVariable": "cusdate"
                    }
                },
                {
                    "id": "e65b45b5219b54fcb7dc6970dbfe0602dd99f553efb4ccb699a197a5b8f174b1",
                    "name": "Comment avez-vous connu Aroma-Zone ?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "d8ca306f861f9d0eaf264e86a4745a2f6d84bbea8490704c767655b3fd86ae77",
                            "type": "string",
                            "kind": "static",
                            "reference": "button",
                            "label": "Selected button"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-radiobuttons",
                        "version": "6.0.3",
                        "buttons": [
                            {
                                "id": "161c87136a00aacba454c41ff24de00e56f1ee4257eca010bc8fc9c30beb200b",
                                "name": "Par un ami ou un proche",
                                "value": "friend"
                            },
                            {
                                "id": "8214ee2f8e3607d385c36e5d9685359d44f9f34b8358c9b61466dd8483ad3a8b",
                                "name": "Par un influenceur",
                                "value": "influence"
                            },
                            {
                                "id": "1703df5f9819af9ab9b91074ed925adf022209b3dd8ba947fca1aedfa3fb1e75",
                                "name": "Par la presse",
                                "value": "press"
                            },
                            {
                                "id": "bf3aa1d65c39ce3853715ff50458e8fcbcc3c44dfc8e8b470b8fc8a4eb699464",
                                "name": "Par la radio",
                                "value": "radio"
                            },
                            {
                                "id": "fcef6d9f90a8bcb0d23d5402773776c73c196e4a69f70ec96fda3131045220ad",
                                "name": "Par une recherche Google",
                                "value": "google"
                            },
                            {
                                "id": "8b51291e00f6ec05fcd9f215256311b5665f8413300bc4077470cc3248beee86",
                                "name": "Par les réseaux sociaux",
                                "value": "social-network"
                            },
                            {
                                "id": "f91f5bfdd7fccd10ef0e7d7256ae664622015bd119ccfd46b8926d02524a323b",
                                "name": "Par une visite en magasin",
                                "value": "retail"
                            },
                            {
                                "id": "f87d6cc1990eb98faa66c0d77c70a7dd872c41244152cca1154f71fec6c468ed",
                                "name": "Autre",
                                "value": "other"
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "builder": {
        "name": "tripetto",
        "version": "4.5.1"
    }
};
const Columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  // TODO: 参考 https://github.com/akxcv/vuera/issues/31 解决 render 中 react-jsx 解析的问题
  // render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  // render: tags => (
  //   <span>
  //     {tags.map(tag => {
  //       let color = tag.length > 5 ? 'geekblue' : 'green';
  //       if (tag === 'loser') {
  //         color = 'volcano';
  //       }
  //       return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
  //     })}
  //   </span>
  // ),
}, {
  title: 'Action',
  key: 'action',
  // render: (text, record) => (
  //   <span>
  //     <a href="javascript:;">Invite {record.name}</a>
  //     <Divider type="vertical" />
  //     <a href="javascript:;">Delete</a>
  //   </span>
  // ),
}];

const TableData = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

export default {
  name: 'home',
  data() {
    return {
      form: Form,
      columns: Columns,
      tableData: TableData,
    }
  },
  components: {
    Table,
    AutoscrollRunner
  }
}
</script>