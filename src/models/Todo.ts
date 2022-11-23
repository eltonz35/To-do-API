import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface UserInstance extends Model {
    id: Number;
    title: string;
    done: boolean;
} 

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},  {
    tableName: 'todos',
    timestamps: false    
});