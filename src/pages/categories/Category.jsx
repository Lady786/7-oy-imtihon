import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input, InputNumber, Table, Typography, message } from 'antd';
import axios from 'axios';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            { required: true, message: `Please Input ${title}!` },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Category = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCategory, setEditCategory] = useState();
  

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("https://ecommerce-backend-fawn-eight.vercel.app/api/categories");
        setData(response.data);
      } catch (error) {
        message.error('Failed to fetch categories');
      }
    };
    getCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ecommerce-backend-fawn-eight.vercel.app/api/categories/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      message.success('Category deleted successfully');
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      message.error('Failed to delete category');
    }
  };


  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
 const [newCategory, setNewCategory] = useState({name:"",image:""} )
  const showModal = (category) => {
    setEditCategory(category)
    setIsModalOpen(true);
  };

const showCreateModal = ()=>{
setIsCreateModalOpen(true);
}

const handleCreateOk = async ()=>{
   setIsCreateModalOpen(false) ;
   if (!newCategory.name || newCategory.image) return;
   try {
    const data = {
        name : newCategory.name,
        image: newCategory.image
    };
    const header = {
        "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
    };
    const response = await axios.post(`https://ecommerce-backend-fawn-eight.vercel.app/api/categories` , data,
        {
            headers: header,
        }
      
    ); console.log(response);
   } catch (error) {
    console.log(error);
   }
    
   
}

const handleCreateCencel = ()=>{
    setIsCreateModalOpen(false)
};

const handleNewCategory = (e)=>{
const {name,value}= e.target
setNewCategory((prevCategory) => ({...prevCategory , [name]: value }))
}
  const handleOk = async () => {
    setIsModalOpen(false);
    try {
        const data = {
            name: editCategory.name,
            image: editCategory.image 
        }
        const header = {
            "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        }
        const response = await axios.put(`https://ecommerce-backend-fawn-eight.vercel.app/api/categories/${editCategory._id}`,data,
            {
                headers: header,
            }
           
           
            
        );
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const isEditing = (record) => record._id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record._id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const handleCatChange = (e)=>{
const {name, value} = e.target;
console.log(name,value);
setEditCategory((prevValue)=> ({
   ...prevValue,
   [name]: value, 
}));
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item._id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      message.error('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (imgUrl) => <img width={100} src={imgUrl} alt={imgUrl} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      render: (_, record) => (
        <Typography.Link onClick={() => showModal(record)}>
          Edit
        </Typography.Link>
      ),
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      render: (_, record) => (
        <Typography.Link onClick={() => handleDelete(record._id)}>
          Delete
        </Typography.Link>
      ),
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) return col;
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Button onClick={showCreateModal} style={{ marginBottom: 16 }}>
        Create
      </Button>
      <Table
        components={{ body: { cell: EditableCell } }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{ onChange: cancel }}
        rowKey="_id"
      />
      <Modal title="Edit category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <form  action="">
        <div><Input placeholder="Name"  value={editCategory?.name} onChange={handleCatChange} name='name' /></div>
        <div><Input placeholder="ImageUrl" value={editCategory?.image} onChange={handleCatChange} name='image' /></div>
        <div>
            <Button type="primary" onClick={handleOk}>Save</Button>
        </div>
       </form>
      </Modal>
      <Modal title="Create category" open={isCreateModalOpen} onOk={handleCreateOk} onCancel={handleCreateCencel}>
       <form  action="">
        <div><Input placeholder="Name" value={newCategory?.name} onChange={handleNewCategory} name='name' /></div>
        <br />
        <div><Input placeholder="ImageUrl" value={newCategory?.image} onChange={handleNewCategory}  name='image' /></div>
        <br />
       
        <div>
            <Button type="primary" onClick={handleCreateOk}>Save</Button>
        </div>
       </form>
      </Modal>
    </Form>
  );
};

export default Category;
