//每個檔案只能有一個預設匯出
export default {
    myName: '晉德',
    fn() {
        console.log('哈哈是晉德拉');
    }
}
//每個檔案能有多個具名匯出
export const myName = '晉德';

export function fn() {
    console.log("是晉德拉");
}