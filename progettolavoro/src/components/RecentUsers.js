import React from 'react';
import { List, Avatar } from 'antd';
import dayjs from 'dayjs';

const RecentUsers = ({ users }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={user => (
                <List.Item
                    actions={[<span>{dayjs(user.data_di_registrazione).format('YYYY-MM-DD')}</span>]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src="https://via.placeholder.com/40" />}
                        title={`${user.nome} ${user.cognome}`}
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    );
};

export default RecentUsers;