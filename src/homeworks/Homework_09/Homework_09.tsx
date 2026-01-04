import { useState, type ChangeEvent, type FormEvent } from "react";
import {v4} from "uuid";

import Button from "components/Button/Button";
import Input from "components/Input/Input";


import { PageWrapper, NoteForm, ButtonControl, Notes, NoteItem, NoteTitle,} from "./styles";


function Homework_09() {
    const [note, setNotes] = useState<string>("");
    const [savedNotes, setSavedNotes] = useState<string[]>([]);

    const onNoteChange  = (event: ChangeEvent<HTMLInputElement>) => {
        setNotes(event.target.value);
    };

    const onSaveNote = (event: FormEvent) => {
        event.preventDefault();

        setSavedNotes((prevValue: string[]) => {
            console.log(prevValue);
            return [...prevValue, note];
         });
    };

console.log(savedNotes);

const noteList = savedNotes.map((value: string) => {
    return <NoteItem key={v4()}>{value}</NoteItem>
});

    return (
        <PageWrapper>
            <NoteForm onSubmit={onSaveNote}>
                <Input
                id="todo-input"
                name="todo"
                placeholder="Enter your note"
                label="Note"
                value={note}
                onChange={onNoteChange}
                />

                <ButtonControl>
                    <Button name="Add" type="submit" />
                        </ ButtonControl>

            </NoteForm>
            <Notes>
                <NoteTitle>Saved Notes:</NoteTitle>
                {noteList}
            </Notes>
        </PageWrapper>
    );
}

export default Homework_09;