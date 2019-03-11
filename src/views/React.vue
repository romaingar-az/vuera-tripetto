<template>
  <div class="react-demo">
    <h1>This is a react demo page</h1>
    <Table :columns="columns" :dataSource="data" />
  </div>
</template>

<script>
/* eslint-disable */
import React from 'react';
import { ReactInVue } from 'vuera'
import { Table, Divider, Tag } from 'antd';
import 'antd/lib/table/style';

const Columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  // render: text => ReactInVue(),
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
  // render: tags => (<span>
  //     {tags.map((tag) => {
  //       let color = tag.length > 5 ? 'geekblue' : 'green';
  //       if (tag === 'loser') {
  //         color = 'volcano';
  //       }
  //       return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
  //     })}
  //   </span>),
}, {
  title: 'Action',
  key: 'action',
  // render: (text, record) => (
  //   <span>
  //     <a>Invite {record.name}</a>
  //     <Divider type="vertical" />
  //     <a>Delete</a>
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
  data() {
    // console.log('data, this.renderName', this.renderName)
    // Columns[0].render = this.renderName;

    return {
      columns: Columns,
      data: TableData,
    };
  },
  created() {
    // console.log('created, this.renderName', this.renderName)
  },
  methods: {
    renderName: () => {
      return ReactInVue(<a>{text}</a>);
    },
  },
  name: 'react',
  components: {
    Table,
    // Divider,
    // Tag,
  },
};
</script>
