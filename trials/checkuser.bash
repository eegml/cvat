if getent passwd django > /dev/null 2>&1; then
    echo "yes the user exists"
else
    echo "No, the user does not exist"
fi
