// Table2.js


import { Table, Button,Radio} from 'antd';
import { Input } from 'antd';

const Search = Input.Search;

const columns = [
  {
    title: '测试点编号',
    dataIndex: 'id',
  },
  {
    title: '测试点名称',
    dataIndex: 'name',
  },
  {
    title: '审计分级',
    dataIndex: 'grade',
  },
  {
    title: '来源',
    dataIndex: 'source',
  },
  {
    title: '关注程度',
    dataIndex: 'care',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '机构名称',
    dataIndex: 'organization',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: `1001084668 ${i}`,
    name: "关联交易的审计" + i ,
    grade: ` ${i}`,
    source: "新增审计测试点",
    care: "一般关注",
    status:"编制中",
    organization:"审计条线武汉审计分部现场审计三处"
  });
}



class Table2 extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>

            <div>
            <Search
                placeholder="input search text"
                enterButton="项目名称"
                size="large"
                onSearch={value => console.log(value)}
            />
            <Search
                placeholder="input search text"
                enterButton="当前审计组"
                size="large"
                onSearch={value => console.log(value)}
            />
            </div>
            <div>
                <Radio.Group >
                    <Radio value={1}>测试点</Radio>
                    <Radio value={2}>审计分类</Radio>
                </Radio.Group>
            </div>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            追加审计测试点
          </Button>
          <Button type="primary" >确认生效</Button>
          <Button type="primary" disabled={!hasSelected} >删除</Button>
          <Button type="primary" disabled={!hasSelected} >查询条件</Button>
          <Button type="primary" disabled={!hasSelected} >关联审计样本表</Button>
          <Button type="primary" disabled={!hasSelected} >分工</Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Table2;


//
