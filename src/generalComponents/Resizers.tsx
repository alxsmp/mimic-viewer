import { Mimic, MimicItem } from "./MimicAndMimicItem";
import styles from '../css/Resizers.module.css'
import { createEffect } from "solid-js";

let minSize = 20;

export function Resizable(props: {
    item: MimicItem;
    selectedItems: MimicItem[];
    mimic: Mimic;
}) {

    return (
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'visible'


        }}>
            <Resizer
                item={props.item}
                itemIsSelected={props.selectedItems.includes(props.item)}
                direction={'n'}
            />
            <Resizer
                item={props.item}
                itemIsSelected={props.selectedItems.includes(props.item)}
                direction={'e'}
            />
            <Resizer
                item={props.item}
                itemIsSelected={props.selectedItems.includes(props.item)}
                direction={'s'}
            />
            <Resizer
                item={props.item}
                itemIsSelected={props.selectedItems.includes(props.item)}
                direction={'w'}
            />
            <Resizer
                item={props.item}
                itemIsSelected={props.selectedItems.includes(props.item)}
                direction={'ne'}
            />
            <Resizer
                item={props.item}
                itemIsSelected={props.selectedItems.includes(props.item)}
                direction={'se'}
            />
            <Resizer
                item={props.item}
                itemIsSelected={props.selectedItems.includes(props.item)}
                direction={'sw'}
            />
            <Resizer
                item={props.item}
                itemIsSelected={props.selectedItems.includes(props.item)}
                direction={'nw'}
            />
        </div>
    );
}



//Create a more generic resizer that can be used for all sides
export function Resizer(props: {
    item: MimicItem;
    itemIsSelected: boolean;
    direction: string;
}) {
    let dragStartTop: number;
    let dragStartItemHeight: number;
    let mouseDown = false;
    let dragStartItemTop: number;
    let dragStartLeft: number;
    let dragStartItemWidth: number;
    let dragStartItemLeft: number;
    let thisStyle = "resizer";

    

    if (props.direction.includes('n')) {
        thisStyle += "Top"
    }
    else if (props.direction.includes('s')) {
        thisStyle += "Bottom"
    }
    if (props.direction.includes('w')) {
        thisStyle += "Left"
    }
    else if (props.direction.includes('e')) {
        thisStyle += "Right"
    }

    const vertical = props.direction.includes('n') ? -1 : props.direction.includes('s') ? 1 : 0;
    const horizontal = props.direction.includes('w') ? -1 : props.direction.includes('e') ? 1 : 0;
    let childPositions: { x: number, y: number, width: number, height: number }[] = [];

    return (

        <div class={props.itemIsSelected ? styles[thisStyle]
            : styles.inactive} onPointerOver={e => {
                if (props.itemIsSelected) {
                    e.currentTarget.style.cursor = props.direction + '-resize';
                }
                else { e.currentTarget.style.cursor = 'default'; }
            }}

            onPointerDown={(e) => {

                dragStartTop = e.clientY; // 54000
                dragStartLeft = e.clientX; // 54000

                dragStartItemHeight = props.item.height;
                dragStartItemTop = props.item.y;

                dragStartItemWidth = props.item.width;
                dragStartItemLeft = props.item.x;

                e.stopPropagation();
                e.currentTarget.setPointerCapture(e.pointerId);
                mouseDown = true;
                props.item.disableAnimation = true;


                //store the original locations of all the children as a proportion of the width and height
                if (props.item.children !== undefined){

                    //for each potential child item, scale it's position and size so it stays in the same relative position
                        props.item.children.forEach(child => {
                            childPositions.push({ x: child.x, y: child.y, width: child.width, height: child.height });
                            child.disableAnimation = true;
                        });
                }

            }}

            onMouseMove={(e) => {
                e.stopPropagation();
                
                if (mouseDown === false)
                    return;

                //work out how much the mouse has moved since the drag started
                const verticalMovement = e.clientY - dragStartTop;
                const horizontalMovement = e.clientX - dragStartLeft;

                //scale these movements by the direction of the resizer
                const verticalMovementScaled = verticalMovement * vertical;
                const horizontalMovementScaled = horizontalMovement * horizontal;


                //Set the width and height of the item based on the movement
                props.item.width = Math.max(Math.round(dragStartItemWidth + horizontalMovementScaled), minSize);
                props.item.height = Math.max(Math.round(dragStartItemHeight + verticalMovementScaled), minSize);



                //If the resizer is on the left or top, we need to move the item as well as resize it
                //But not if the item is at minimum size, as we don't want to move it off the screen
                if (props.direction.includes('w')) {
                    if (props.item.width > minSize)
                        props.item.x = Math.max(Math.round(dragStartItemLeft - horizontalMovementScaled), 0);

                }
                if (props.direction.includes('n')) {
                    if (props.item.height > minSize)
                        props.item.y = Math.max(Math.round(dragStartItemTop - verticalMovementScaled), 0);
                }
                

                if (props.item.children !== undefined){
                    //for each potential child item, scale it's position and size so it stays in the same relative position
                    props.item.children.forEach((child, index) => {
                        
                        child.x = Math.round(childPositions[index].x * (props.item.width / dragStartItemWidth));
                        child.y = Math.round(childPositions[index].y * (props.item.height / dragStartItemHeight));
                        child.width = Math.max(Math.round(childPositions[index].width * (props.item.width / dragStartItemWidth)),20);
                        child.height = Math.max(Math.round(childPositions[index].height * (props.item.height / dragStartItemHeight)),20);

                        //do not let children go outside the bounds of the parent
                        if (child.x + child.width > props.item.width)
                            child.x = props.item.width - child.width;
                        if (child.y + child.height > props.item.height)
                            child.y = props.item.height - child.height;

                    });
                }

            }}
            onPointerUp={(e) => {
                props.item.disableAnimation = undefined
                e.currentTarget.releasePointerCapture(e.pointerId);
                mouseDown = false;
                childPositions = [];
                if (props.item.children !== undefined){
                for (let i = 0; i < props.item.children.length; i++) {
                    props.item.children[i].disableAnimation = undefined;
                }
            }
            }}
            onClick={e => {
                // Stop propagation so background click handler doesn't fire as well
                e.stopPropagation();
            }} />);
}




