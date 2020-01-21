import React from 'react';

import {
    Icon,
    Layout,
    Tooltip,
} from 'antd';

import {
    ActiveControl,
} from 'reducers/interfaces';

import {
    TagIcon,
} from 'icons';

import {
    Canvas,
} from 'cvat-canvas';

import CursorControl from './cursor-control';
import MoveControl from './move-control';
import RotateControl from './rotate-control';
import FitControl from './fit-control';
import ResizeControl from './resize-control';
import DrawRectangleControl from './draw-rectangle-control';
import DrawPolygonControl from './draw-polygon-control';
import DrawPolylineControl from './draw-polyline-control';
import DrawPointsControl from './draw-points-control';
import MergeControl from './merge-control';
import GroupControl from './group-control';
import SplitControl from './split-control';

interface Props {
    canvasInstance: Canvas;
    rotateAll: boolean;
    activeControl: ActiveControl;

    onMergeStart(): void;
    onGroupStart(): void;
    onSplitStart(): void;
}

export default function ControlsSideBarComponent(props: Props): JSX.Element {
    const {
        canvasInstance,
        activeControl,
        rotateAll,

        onMergeStart,
        onGroupStart,
        onSplitStart,
    } = props;

    return (
        <Layout.Sider
            className='cvat-canvas-controls-sidebar'
            theme='light'
            width={44}
        >
            <CursorControl canvasInstance={canvasInstance} activeControl={activeControl} />
            <MoveControl canvasInstance={canvasInstance} activeControl={activeControl} />
            <RotateControl canvasInstance={canvasInstance} rotateAll={rotateAll} />

            <hr />

            <FitControl canvasInstance={canvasInstance} />
            <ResizeControl canvasInstance={canvasInstance} activeControl={activeControl} />

            <hr />

            <DrawRectangleControl canvasInstance={canvasInstance} activeControl={activeControl} />
            <DrawPolygonControl canvasInstance={canvasInstance} activeControl={activeControl} />
            <DrawPolylineControl canvasInstance={canvasInstance} activeControl={activeControl} />
            <DrawPointsControl canvasInstance={canvasInstance} activeControl={activeControl} />

            <Tooltip overlay='Setup a tag' placement='right'>
                <Icon component={TagIcon} />
            </Tooltip>

            <hr />

            <MergeControl
                canvasInstance={canvasInstance}
                activeControl={activeControl}
                onMergeStart={onMergeStart}
            />
            <GroupControl
                canvasInstance={canvasInstance}
                activeControl={activeControl}
                onGroupStart={onGroupStart}
            />
            <SplitControl
                canvasInstance={canvasInstance}
                activeControl={activeControl}
                onSplitStart={onSplitStart}
            />
        </Layout.Sider>
    );
}
