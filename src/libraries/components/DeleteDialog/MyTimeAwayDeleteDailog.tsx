import * as React from 'react';
import {
    Dialog, DialogType, DialogFooter, PrimaryButton, DefaultButton, Spinner,
    SpinnerSize
} from 'office-ui-fabric-react';
import IMyTimeAwayDeleteDailogProps from './IMyTimeAwayDeleteDailogProps';
import IMyTimeAwayDeleteDailogState from './IMyTimeAwayDeleteDailogState';

export default class MyTimeAwayBasicDailog extends React.Component<IMyTimeAwayDeleteDailogProps, IMyTimeAwayDeleteDailogState>{
    constructor(props: IMyTimeAwayDeleteDailogProps) {
        super(props);
        this.state = { showDialog: this.props.showDialog };
    }
    public componentWillReceiveProps(props: IMyTimeAwayDeleteDailogProps) {
        this.setState({ showDialog: props.showDialog });
    }
    
    public render() {
        return (
            <Dialog
                isOpen={this.state.showDialog}
                type={DialogType.normal}
                onDismiss={this._closeDialog.bind(this)}
                title='Hint'
                subText='Are you sure to delete this Time Away entry?cloristest'
                isBlocking={true}
                containerClassName='ms-dialogMainOverride'>
                {null /** You can also include null values as the result of conditionals */}
                <DialogFooter>
                    <PrimaryButton onClick={this._confirmDialog.bind(this)} text='Yes' />
                    <DefaultButton onClick={this._closeDialog.bind(this)} text='No' />
                </DialogFooter>
            </Dialog>
        );
    }
    private _confirmDialog(event: React.MouseEvent<HTMLButtonElement>) {
        this.setState({ showDialog: false });
        this.props.itemDeleteConfirmOperationCallback();
    }

    private _closeDialog(event: React.MouseEvent<HTMLButtonElement>) {
        this.setState({ showDialog: false });
    }
}