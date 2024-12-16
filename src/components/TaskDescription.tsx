import React, { useState, useEffect }  from 'react';

interface Task {
  title: string;
  description: JSX.Element;
}
const tasks: Task[] = [
  {
    title:"1792. Maximum Average Pass Ratio",
    description: (<>There is a school that has classes of students and each class will be having a final exam. You are given a <b>2D integer array classes</b>, where<br></br> <code>classes[i] = [pass<sub>i</sub>, total<sub>i</sub>]</code>. You know beforehand that in the <code><i>i<sup>th</sup> class</i></code>, there are{" "} <code>total<sub>i</sub></code> total students, but only{" "} <b>pass<sub>i</sub></b> number of students will pass the exam.<br /><br /> You are also given an integer <code>extraStudents</code>. There are another <code>extraStudents</code> brilliant students that are <b>guaranteed</b> to pass the exam of any class they are assigned to. You want to assign each of the <code>extraStudents</code> students to a class in a way that <b>maximizes</b> the <b>average</b> pass ratio across <b>all</b> the classes.<br /><br /> The <b>pass ratio</b> of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The <b>average pass ratio</b> is the sum of pass ratios of all the classes divided by the number of the classes.<br /><br /> Return <i>the <b>maximum</b> possible average pass ratio after assigning the <code>extraStudents</code> students.</i> Answers within <code>10<sub>-5</sub></code> of the actual answer will be accepted.<br /><br />
    Example 1:
    <li><b>Input:</b> classes = [[1,2],[3,5],[2,2]], <code>extraStudents</code> = 2</li>
    <li><b>Output:</b> 0.78333</li>
    <li><b>Explanation:</b> You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333. </li>
    <br />
    Example 2:
    <li><b>Input:</b> classes = [[2,4],[3,9],[4,5],[2,10]], <code>extraStudents</code> = 4</li>
    <li><b>Output:</b> 0.53485</li>
    <br />
    <ul>Constraints:</ul>
    <li><code>1 &lt;= classes.length &lt;= 10<sup>5</sup></code></li>
    <li><code>classes[i].length == 2</code></li>
    <li><code>1 &lt;= pass<sub>i</sub> &lt;= total<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
    <li><code>1 &lt;= extraStudents &lt;= 10<sup>5</sup></code></li>
    </>),
  },
  {
    title:"3264. Final Array State After K Multiplication Operations I",
    description: (<>You are given an integer array <code>nums</code>, an integer <code>k</code>, and an integer <code>multiplier</code>.<br /><br />  You need to perform <code>k</code> operations on <code>nums</code>. In each operation:<br /> 
      <li>
        Find the <b>minimum</b> value <code>x</code> in <code>nums</code>. If there are multiple occurrences of the minimum value, select the one that appears <b>first</b>.
      </li>
      <br />
      <li>
        Replace the selected minimum value <code>x</code> with <code>x * multiplier</code>.
      </li>
        Return an integer array denoting the <i>final state</i> of <code>nums</code> after performing all <code>k</code> operations.<br /><br />
      Example 1:
      <li><b>Input:</b> nums = [2,1,3,5,6], k = 5, multiplier = 2</li>
      <li><b>Output:</b> [8,4,6,5,6]</li>     <br />
      <b>Explanation:</b>
          <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>After operation 1</td>
                <td>[2, 2, 3, 5, 6]</td>
              </tr>
              <tr>
                <td>After operation 2</td>
                <td>[4, 2, 3, 5, 6]</td>
              </tr>
              <tr>
                <td>After operation 3</td>
                <td>[4, 4, 3, 5, 6]</td>
              </tr>
              <tr>
                <td>After operation 4</td>
                <td>[4, 4, 6, 5, 6]</td>
              </tr>
              <tr>
                <td>After operation 5</td>
                <td>[8, 4, 6, 5, 6]</td>
              </tr>
            </tbody>
          </table>
        </div>
       <br />
      Constraints:
        <li><code>1 &lt;= nums.length &lt;= 100</code></li>
        <li><code>1 &lt;= nums[i] &lt;= 100</code></li>
        <li><code>1 &lt;= k &lt;= 10</code></li>
        <li><code>1 &lt;= multiplier &lt;= 5</code></li>
      </>)
  },
  {
    title:"1817. Finding the Users Active Minutes",
    description: (<>You are given the logs for users' actions on LeetCode, and an integer <code>k</code>. The logs are represented by a 2D integer array <code>logs</code> where each <code>logs[i] = [ID<sub>i</sub>, time<sub>i</sub>]</code> indicates that the user with <code>ID<sub>i</sub></code> performed an action at the minute <code>time<sub>i</sub></code>.<br /><br /> <b>Multiple users</b> can perform actions simultaneously, and a single user can perform <b>multiple actions</b> in the same minute.<br /><br /> The <b>user active minutes (UAM)</b> for a given user is defined as the <b>number of unique minutes</b> in which the user performed an action on LeetCode. A minute can only be counted once, even if multiple actions occur during it.<br /><br /> You are to calculate a <b>1-indexed</b> array <code>answer</code> of size <code>k</code> such that, for each <code>j</code> <code>(1 &lt;= j &lt;= k)</code>, <code>answer[j]</code> is the <b>number of users</b> whose <b>UAM</b> equals <code>j</code>.<br /><br /> <i>Return the array <code>answer</code> as described above.</i>  <br /><br />
    Example 1:
    <li><b>Input:</b> logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5</li>
    <li><b>Output:</b> [0,2,0,0,0]</li>
    <li><b>Explanation:</b>
        The user with ID=0 performed actions at minutes 5, 2, and 5 again. Hence, they have a UAM of 2 (minute 5 is only counted once).
        The user with ID=1 performed actions at minutes 2 and 3. Hence, they have a UAM of 2.
        Since both users have a UAM of 2, answer[2] is 2, and the remaining answer[j] values are 0.
    </li> <br />
    Example 2:
    <li><b>Input:</b> logs = [[1,1],[2,2],[2,3]], k = 4</li>
    <li><b>Output:</b> [1,1,0,0]</li>
    <li><b>Explanation:</b>
        The user with ID=1 performed a single action at minute 1. Hence, they have a UAM of 1.
        The user with ID=2 performed actions at minutes 2 and 3. Hence, they have a UAM of 2.
        There is one user with a UAM of 1 and one with a UAM of 2.
        Hence, answer[1] = 1, answer[2] = 1, and the remaining values are 0 
    </li>
    <br />
    Constraints:
    <li><code>1 &lt;= logs.length &lt;= 10<sup>4</sup></code></li>
    <li><code>0 &lt;= ID<sub>i</sub> &lt;= 10<sup>9</sup></code></li>
    <li><code>1 &lt;= time<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
    <li><code>k</code> is in the range <code>[The maximum <b>UAM</b> for a user, 10<sup>5</sup>]</code></li>
    </>),
  },
]

export const TaskDescription: React.FC = () => {
  const [currentTask] = useState<Task>(tasks[Math.floor(Math.random() * tasks.length)]);

  return (
    <div className="task">
      <h2 className="task-title">⚡ {currentTask.title}</h2>
      <div className="task-description">{currentTask.description}</div>
    </div>
  );
};

export default TaskDescription;
