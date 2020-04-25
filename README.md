# react-native-horizontal-list
A simple React Native component that implements a Horizontal List UI.

<b>Installation </b><br/>
using npm:
<b> if Download/Clone from git </b>
<pre>npm i &lt;folder_path&gt;/react-native-horizontal-list</pre>

<b>Usage</b>
<pre>import {HorizontalList} from 'react-native-horizontal-list'; </pre>

Simply use <HorizontalList/> tag for creating a Horizontal list.

<pre>
  &lt;View style={{flex: 1}}&gt;
    &lt;HorizontalList 
        data={data}
        titleOfList='New Release' 
        viewProps={{marginTop:50 }}
        ratingColor='#f1c40f'
        ratingBackgroundColor='#fff'
    /&gt;
  &lt;/View&gt;
</pre>

<h2>Horizontal List Component</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>type</th>
  </tr>
    <td>data</td>
    <td>array, will dispaly in the list</td>
    <td>Array</td>
  </tr>
  <tr>
    <td>titleOfList</td>
    <td>Name of the list, show above the list of view</td>
    <td>String</td>
  </tr>
  <tr>
    <td>viewProps</td>
    <td>styleprop want to apply on list</td>
    <td>View Style props</td>
  </tr>
</table>
