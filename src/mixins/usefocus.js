import { ref, provide, toRaw } from 'vue'; 


export const useFocus = (program) => {
    const focus = ref(new Set());
    const resetFocus = (target) => {
        target = toRaw(target);
        focus.value = new Set(target ? (Array.isArray(target) ? target.filter(n => n) : [target]): []);
    }
    const isOnFocus = (target) => {
        target = toRaw(target);
        return focus.value.has(target);
    }

    const doDelete = () => {
        toRaw(focus.value).forEach(t => {
            const links = t.delete();
            program.delete(t);
            if(links) {
                links.forEach(l => program.deleteLinkByKey(l));
            }
        });
    }
    provide('resetFocus', resetFocus);
    provide('isOnFocus', isOnFocus);
    return {
        resetFocus,
        doDelete
    }
}