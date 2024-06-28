import React from 'react';
import { List, Avatar } from 'antd';
import dayjs from 'dayjs';

const RecentUsers = ({ users }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={user => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://via.placeholder.com/40" />}
                        title={user.email}
                        description={dayjs(user.Data_di_registrazione).format('YYYY-MM-DD')}
                    />
                </List.Item>
            )}
        />
    );
};

export default RecentUsers;
