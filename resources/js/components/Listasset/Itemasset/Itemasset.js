import React from "react";
import "./itemasset.scss";
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Itemasset = () => {
    return (
        <div className="itemasset">
            <table>
                <thead>
                    <tr>
                        <th style={{ paddingLeft: 20 }}>No</th>
                        <th>
                            <input type="checkbox" name="selectitem" />
                        </th>
                        <th>Kode Asset</th>
                        <th>Item</th>
                        <th>Satuan</th>
                        <th>Kategori</th>
                        <th>Tgl Asset</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MNT-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Monitor LQ83</td>
                        <td>Unit</td>
                        <td>Monitor</td>
                        <td>31 November 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status_none"/>Buruk</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status_none"/>Buruk</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status_none"/>Buruk</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>1</td>
                        <td>
                            <input type="checkbox" name="selectitem" />
                        </td>
                        <td>MJ-0001</td>
                        <td style={{fontWeight:'bolder',fontSize:'0.95em',color:'rgb(77, 76, 76)'}}>Meja Kerja</td>
                        <td>Unit</td>
                        <td>Meja Kayu</td>
                        <td>12 Maret 2020</td>
                        <td><FiberManualRecordIcon className="itemasset_status"/>Baik</td>
                        <td style={{cursor:'pointer',color:'rgb(131, 130, 130)'}}><EditTwoToneIcon style={{fontSize:19}}/> 
                        &nbsp;<DeleteForeverTwoToneIcon style={{fontSize:19}}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Itemasset;
