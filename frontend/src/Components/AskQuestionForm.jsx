import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputComponent as Input, RTE, Button } from '../Components'
import 'react-tagsinput/react-tagsinput.css';
import TagsInput from 'react-tagsinput';


function AskQuestionForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.Title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            tags: post?.tags || []
        },
    });

    const [tags, setTags] = useState(getValues('tags') || []);

    const submit = async (data) => {
        console.log("Data::", data);
        try {

        } catch (error) {

        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)}
            className='mx-28 p-3 rounded-md bg-neutral-300 border border-black/20 shadow-md'>
            <div className="flex flex-col items-center">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-2"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-3"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Question :" name="content" control={control} defaultValue={getValues("content")} />
                <div className="mt-2 w-full flex flex-col">
                    <div className="text-lg font-semibold pl-1 pb-2">Tags:</div>
                    <TagsInput
                        value={tags}
                        onChange={(newTags) => {
                            setTags(newTags);
                            setValue('tags', newTags, { shouldValidate: true });
                        }}
                        inputProps={{ placeholder: 'Add tags' }}
                    />
                </div>
                <div className="flex justify-center mt-4 w-72 ">
                    <Button type="submit" bgColor={post ? "bg-green-500" : undefined}
                        className='w-full'>
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default AskQuestionForm