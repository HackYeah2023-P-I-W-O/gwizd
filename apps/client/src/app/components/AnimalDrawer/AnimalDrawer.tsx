import { List } from '../List';
import { Drawer } from '../core';

type AnimalPropsType = { open: boolean; onClose: () => void };

export function AnimalDrawer({ open, onClose }: AnimalPropsType) {
    return (
        <Drawer open={open} onClose={onClose}>
            <List />
        </Drawer>
    );
}
