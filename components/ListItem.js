
import React, {useMemo} from 'react'
import { View } from 'react-native';
import { Text,TouchableOpacity, } from "react-native";
import { Swipeable } from 'react-native-gesture-handler/Swipeable';
import { theme } from '../theme';
export const ListItem =  () => ({
    label, detail, onClick, swipeToDelete, onDelete, isDestructive,

}) => {
    const item = useMemo(() => (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                justifyContent: detail ? 'space-between' : 'flex-start',
                alignItems: 'center',
                padding: 20,
                borderBottomwidth: 1,
                borderbottomColor: theme.colors.border,
            }}
            onPress={onClick}
        >
            <Text style={{ fontSize: 18 }}>{label}</Text>
            {detail}
        </TouchableOpacity>
    ),
        []
    );
    if (swipeToDelete) {
        return (
            <Swipeable
                renderRightActions={() => (
                    <TouchableOpacity
                        style={{
                            backgroundColor: isDestructive ?
                                justifyContent : 'center',
                            alignItems: 'center',
                            width: 100,
                        }}
                        onPress={onDelete}
                    >
                        <Text style={{ color: 'white' }}>Delete</Text>
                    </TouchableOpacity>
                )}
                onSwipeableRightOpen={onDelete}
            >
                {item}
            </Swipeable>
        );
    }
    return item;
};
